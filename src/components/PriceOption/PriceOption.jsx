import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 p-6 flex flex-col rounded-xl">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-6">{name}</h4>
      <div className="pl-3 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-400 w-full rounded-lg py-2 text-xl font-semibold hover:bg-green-800">Buy Now</button>
    </div>
  );
};

export default PriceOption;
