'use client';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area
} from 'recharts';

interface ChartProps {
    type: 'bar' | 'line' | 'pie' | 'area';
    data: any[];
    dataKey?: string; // Key for the data value (e.g., 'value', 'revenue')
    xAxisKey?: string; // Key for the X-axis label (e.g., 'name', 'month')
    colors?: string[];
    height?: number;
    title?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-slate-100 shadow-xl rounded-xl">
                <p className="text-sm font-bold text-slate-800">{label}</p>
                <p className="text-sm text-teal-600 font-medium">
                    {payload[0].value}
                </p>
            </div>
        );
    }
    return null;
};

export default function AdminChart({
    type,
    data,
    dataKey = 'value',
    xAxisKey = 'name',
    colors = ['#0d9488', '#f59e0b', '#3b82f6', '#ec4899'],
    height = 300,
    title
}: ChartProps) {
    return (
        <div className="w-full h-full">
            {title && <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">{title}</h4>}

            <div style={{ width: '100%', height: height }}>
                <ResponsiveContainer>
                    {type === 'bar' ? (
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey={xAxisKey}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey={dataKey} fill={colors[0]} radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    ) : type === 'line' ? (
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey={xAxisKey}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={colors[0]}
                                strokeWidth={3}
                                dot={{ fill: 'white', stroke: colors[0], strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, fill: colors[0] }}
                            />
                        </LineChart>
                    ) : type === 'area' ? (
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={colors[0]} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={colors[0]} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey={xAxisKey}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey={dataKey}
                                stroke={colors[0]}
                                fillOpacity={1}
                                fill={`url(#color${dataKey})`}
                            />
                        </AreaChart>
                    ) : (
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey={dataKey}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
}
