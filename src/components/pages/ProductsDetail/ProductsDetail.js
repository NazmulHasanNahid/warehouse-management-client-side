import React from 'react';
import { Col, Row } from "react-bootstrap";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const ProductsDetail = () => {
     const chartData = [
          {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
          },
          {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
          },
          {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
          },
          {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
          },
          {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
          },
          {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
          },
        ];
      
     return (
          <div>
            <div className='border container text-center'>
          <p className='text-center my-3 text-secondary fw-bold'>Stock Summary</p> <hr />

          <Row xs={1} md={2} className="d-flex align-items-center ">
            <Col>
               <span className=' d-flex align-items-center justify-content-between text-secondary '>
                    <p>In Stock</p>
                    <p>50</p>
               </span>
               <span className=' d-flex align-items-center justify-content-between text-secondary '>
                    <p>Out Of Stock</p>
                    <p>30</p>
               </span>
               <span className=' d-flex align-items-center justify-content-between text-secondary '>
                    <p>Low Stock</p>
                    <p>10</p>
               </span>
               
            </Col>

            <Col>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart width={700} height={300}>
                <Pie data={chartData} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"/>
                <Pie data={chartData}  dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80}  fill="#82ca9d" label />
              </PieChart>
            </ResponsiveContainer>
            </Col>
          </Row>
            </div>


          </div>
     );
};

export default ProductsDetail;