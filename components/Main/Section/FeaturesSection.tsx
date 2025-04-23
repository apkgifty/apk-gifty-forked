import {
  CreditCard,
  ArrowUpDown,
  Zap,
  Shield,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Buy gift cards",
    description: "Purchase all kinds of gift cards at the best market rates.",
  },
  {
    icon: ArrowUpDown,
    title: "Sell gift cards",
    description:
      "Sell all kinds of gift cards at the best market rates for cash.",
  },
  {
    icon: Zap,
    title: "Instant payment",
    description: "Lightening fast payment after your order is confirmed.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "APK Xchange assures secure payments across all platforms.",
  },
  {
    icon: Users,
    title: "Promotions",
    description: "Enjoy discount on all gift cards on APK Xchange. T&C apply.",
  },
  {
    icon: Wallet,
    title: "Payment",
    description:
      "Get paid in your preferred payment method when you purchase gift cards on APK Xchange.",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        {/* Hero Title */}
        <h1 className="text-center text-xl md:text-4xl font-medium mb-20">
          The <span className="text-blue-500">best</span> gift card{" "}
          <span className="text-blue-500">trading platform</span>
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <feature.icon
                  className="h-8 w-8 text-blue-500"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-lg font-medium text-white mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-400 text-sm max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
