import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <h3 className="flex items-center"><FaCheckCircle className="text-green-400 mr-2"></FaCheckCircle> {feature}</h3>
        </div>
    );
};

export default Feature;