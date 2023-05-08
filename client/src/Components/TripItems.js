import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../utils/queries";

function TripItems() {
  const [listItemsData, setListItemsData] = useState([]);
  const { loading, error, data } = useQuery(GET_ITEMS);

  useEffect(() => {
    if (data) {
      setListItemsData(data.TripItems);
    }
  }, [data]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Hotel",
      dataIndex: "hotel",
    },
    {
      title: "Details",
      dataIndex: "details",
    },
    {
      title: "Flight Cost",
      dataIndex: "flights",
    },
    {
      title: "Accomodation Cost",
      dataIndex: "accomodation",
    },
    {
      title: "Food Cost",
      dataIndex: "food",
    },
    {
      title: "Activities",
      dataIndex: "activities",
    },
    
    {
      title: "Actions",
      dataIndex: "actions",
      // render: (text, record) => {
      //   return (
      //     <div>
      //       <EditOutlined
      //         onClick={() => {
      //           setSelectedItemForEdit(record);
      //           setShowAddEditTransactionModal(true);
      //         }}
      //       />
      //       <DeleteOutlined className="mx-3" onClick={()=>deleteTransaction(record)}/>
      //     </div>
      //   );
      // },
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="table-list">
      <div className="table">
        <Table columns={columns} dataSource={listItemsData} />
      </div>
    </div>
  );
}

export default TripItems;

