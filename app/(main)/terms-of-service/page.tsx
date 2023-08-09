import AppLayout from "@/components/Layout/AppLayout";

import Terms from "../../terms-of-service.mdx";

const TermsOfService = () => {
  return (
    <div className="w-full text-white py-8">
      <AppLayout>
        <h1 className="text-center text-xl lg:text-3xl font-bold lg:pb-10">
          TERMS OF SERVICE
        </h1>
        <div className="space-y-4 px-3 lg:px-0 text-sm">
          <Terms />
        </div>
      </AppLayout>
    </div>
  );
};

export default TermsOfService;
