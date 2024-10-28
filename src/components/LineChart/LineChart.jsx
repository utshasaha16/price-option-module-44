import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Alice Johnson", math: 78, physics: 85 },
        { id: 2, name: "Ben Carter", math: 88, physics: 79 },
        { id: 3, name: "Chloe Smith", math: 92, physics: 91 },
        { id: 4, name: "David Lee", math: 65, physics: 74 },
        { id: 5, name: "Ella Brown", math: 81, physics: 80 },
        { id: 6, name: "Frank Garcia", math: 76, physics: 78 },
        { id: 7, name: "Grace Kim", math: 84, physics: 83 },
        { id: 8, name: "Henry Patel", math: 90, physics: 89 },
        { id: 9, name: "Isla Thompson", math: 70, physics: 75 },
        { id: 10, name: "Jack Wilson", math: 85, physics: 82 }
      ];
      

    return (
        <div>
            <LChart width={800} height={500} data={studentMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;