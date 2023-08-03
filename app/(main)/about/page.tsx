import AboutBlock from "@/components/Main/AboutBlock";
import Banner from "@/components/Main/Banner";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Banner />
      <div className="lg:px-24">
        <div className="w-full flex ">
          <div className="flex-1">Image</div>
          <AboutBlock title="Our Product">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              egestas congue quisque egestas diam in. Lacus vestibulum sed arcu
              non. Cras semper auctor neque vitae tempus quam. Semper feugiat
              nibh sed pulvinar proin gravida hendrerit. Eget nunc scelerisque
              viverra mauris in. Facilisis magna etiam tempor orci eu lobortis
              elementum nibh tellus. Urna nec tincidunt praesent semper feugiat
              nibh sed. Libero nunc consequat interdum varius sit amet mattis
              vulputate enim. Sit amet nisl purus in mollis nunc sed id semper.
              Eu nisl nunc mi ipsum faucibus. Elit scelerisque mauris
              pellentesque pulvinar pellentesque. Dui nunc mattis enim ut tellus
              elementum sagittis vitae. Lobortis feugiat vivamus at augue eget
              Porttitor leo a diam sollicitudin tempor id eu. Lorem dolor sed
              viverra ipsum nunc aliquet bibendum. Gravida in fermentum et
              sollicitudin. Pellentesque sit amet porttitor eget dolor morbi non
              arcu risus. Netus et malesuada fames ac turpis egestas. Dictum non
              consectetur a erat nam at lectus urna duis. Adipiscing
            </p>
          </AboutBlock>
        </div>
        <div className="w-full flex gap-x-24 mt-10">
          <AboutBlock title="Secure">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              egestas congue quisque egestas diam in. Lacus vestibulum sed arcu
              non. Cras semper auctor neque vitae tempus quam. Semper feugiat
              nibh sed pulvinar proin gravida hendrerit. Eget nunc
            </p>
          </AboutBlock>
          <AboutBlock
            title="Good Rates"
            buttonText="Buy/Sell"
            link="/exhange/buy"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              egestas congue quisque egestas diam in. Lacus vestibulum sed arcu
              non. Cras semper auctor neque vitae tempus quam. Semper feugiat
              nibh sed pulvinar proin gravida hendrerit. Eget nunc
            </p>
          </AboutBlock>
          <AboutBlock title="Promotions" buttonText="Read More">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              egestas congue quisque egestas diam in. Lacus vestibulum sed arcu
              non. Cras semper auctor neque vitae tempus quam. Semper feugiat
              nibh sed pulvinar proin gravida hendrerit. Eget nunc
            </p>
          </AboutBlock>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
