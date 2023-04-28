import React from "react";
import { Table } from "antd";

const AttendanceTable = ({data}) => {
  const columns = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
      width: 100,
      fixed: "left",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
      fixed: "left",    
      width: 200,
    },
  ];
  for (let i = 1; i <= 31; i++) {
    columns.push({
      title: i,
      width: 50,
      dataIndex:i,
      key: i,
    });
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
    </div>
  );
};

export default AttendanceTable;
