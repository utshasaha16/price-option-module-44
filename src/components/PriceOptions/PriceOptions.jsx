import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymPricingOptions = [
    {
      id: 1,
      name: "Basic",
      price: 20,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free water station",
        "One group class per week",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 45,
      features: [
        "Access to gym equipment",
        "Locker room and sauna access",
        "Free water station",
        "Three group classes per week",
        "One free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 70,
      features: [
        "24/7 gym access",
        "Locker room, sauna, and steam room access",
        "Unlimited group classes",
        "Weekly personal training session",
        "Access to all premium equipment",
        "Discounts on merchandise and supplements",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-2xl font-bold">Best Price In The Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {gymPricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
