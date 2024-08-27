"use client";
import React from "react";
import Image from "next/image";
import Webcam from "react-webcam";
import { base64ToBlob } from "@/utils/clienthelpers";
import MiniLoader from "@/components/UI/Loader/MiniLoader";
import axios from "axios";
import Link from "next/link";

const SelfieCapturePage = () => {
  const webcamRef = React.useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = React.useState<string | null>(null);
  const [cameraGranted, setCameraGranted] = React.useState<boolean>(false);
  const [loading, setIsLoading] = React.useState<boolean>(false);
  const [uploaded, setUploaded] = React.useState<boolean>(false);

  const videoConstraints = {
    facingMode: "user",
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    if (imageSrc !== undefined) {
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);

  const retake = () => {
    setImgSrc(null);
  };

  const submit = async () => {
    if (imgSrc === null) return;
    const blob = base64ToBlob(imgSrc!);

    const formData = new FormData();
    formData.append("face_image", blob);
    setIsLoading(true);
    try {
      const response = await axios.post("/api/kyc", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        setIsLoading(false);
        setUploaded(true);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const checkCameraPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraGranted(true);
      } catch (error) {
        setCameraGranted(false);
      }
    };

    checkCameraPermission();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center px-8 mt-5">
      {!loading && !uploaded ? (
        <div className="w-full flex flex-col items-center justify-center">
          {cameraGranted ? (
            <>
              {imgSrc === null ? (
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  audio={false}
                  videoConstraints={videoConstraints}
                />
              ) : (
                <img src={imgSrc} />
              )}
              <div className="flex gap-x-4 mt-6">
                {imgSrc && (
                  <button
                    className="bg-blue-500 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg hover:bg-blue-700"
                    onClick={retake}
                  >
                    Retake
                  </button>
                )}
                <button
                  className="bg-orange-500 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg hover:bg-orange-700"
                  onClick={imgSrc === null ? capture : submit}
                >
                  {imgSrc === null ? "Capture" : "Submit"}
                </button>
              </div>
            </>
          ) : (
            <p className="text-white text-sm font-bold">
              Please allow camera access to capture a selfie.
            </p>
          )}
        </div>
      ) : loading && !uploaded ? (
        <MiniLoader />
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src="/images/verified.png"
            width={200}
            height={200}
            alt="verified"
          />
          <p className="text-white text-sm font-bold text-center mb-4">
            Uploaded Successfully
          </p>
          <Link href={"/dashboard/exchange/buy"}>
            <button className="bg-orange-500 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg hover:bg-orange-700">
              Complete Verification
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SelfieCapturePage;
