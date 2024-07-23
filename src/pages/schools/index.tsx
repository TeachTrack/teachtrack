import { Button, Dropdown, MenuProps, Pagination, Table } from "antd";
import { useGetSchools } from "../../react-query/hooks/hooks";
import { useState } from "react";
import { IRequestParam } from "../../utils/interfaces/table.interface";

const items: MenuProps["items"] = [
  {
    label: "Ko'rish",
    key: "0",
  },
  {
    label: "Tahrirlash",
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "O'chirish",
    key: "3",
  },
];

const columns = [
  {
    key: "phoneNumber",
    title: "Telfon Raqami",
    dataIndex: "phoneNumber",
  },
  {
    key: "address",
    title: "Manzili",
    dataIndex: "address",
  },
  {
    key: "subdomain",
    title: "Subdomain",
    dataIndex: "subdomain",
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
  },
  {
    key: "createdAt",
    title: "Yaratilgan Sana",
    dataIndex: "createdAt",
  },
  {
    key: "_id",
    title: "Amallar",
    dataIndex: "_id",
    render: () => (
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button>Amallar</Button>
      </Dropdown>
    ),
  },
];

const Schools = () => {
  const [params, setParams] = useState<IRequestParam>({
    limit: 10,
    page: 1,
  });
  const { data, refetch, isLoading, isRefetching } = useGetSchools(params);

  const handlePaginationChange = (page: number, pageSize: number) => {
    setParams({
      page: page,
      limit: pageSize,
    });
    refetch();
  };

  return (
    <div>
      <div className="flex border items-center justify-between bg-white p-4 rounded">
        <h2 className="text-xl font-medium">Maktablar Ro'yhati</h2>
        <Button size="large">Maktab Yaratish</Button>
      </div>
      <div className="mt-4">
        <Table loading={isLoading || isRefetching} className="border rounded" columns={columns} dataSource={data?.data || []} pagination={false} />
      </div>
      <div className="mt-4 bg-white rounded border p-2">
        <Pagination current={params.page} pageSize={params.limit} defaultCurrent={params.page} onChange={handlePaginationChange} />
      </div>
    </div>
  );
};

export default Schools;
