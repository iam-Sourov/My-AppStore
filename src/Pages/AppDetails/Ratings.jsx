import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, LabelList } from 'recharts';

const Ratings = ({ ratings }) => {

    return (
        <div>
            <div className="mt-2 bg-[#F5F5F5] rounded-2xl mr-4">
                <div>
                    <h2 className="text-lg font-semibold p-4 text-gray-700">Ratings</h2>
                </div>
                <ResponsiveContainer width="95%" height={250}>
                    <BarChart
                        data={ratings}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                    >
                        <CartesianGrid horizontal={false} stroke="#E5E5E5" />
                        <XAxis type="number" domain={[0, 10000]} axisLine={false} tickLine={false} />
                        <YAxis
                            type="category"
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            width={70}
                            tick={{ fontSize: 13, fill: "#555" }}
                        />
                        <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#FFA500" />
                                <stop offset="100%" stopColor="#FF6B00" />
                            </linearGradient>
                        </defs>
                        <Bar dataKey="count" fill="url(#barGradient)" >
                            <LabelList dataKey="count" position="right" fill="#333" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Ratings;