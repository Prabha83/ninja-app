import React, { ChangeEvent, useState } from "react";
import { DataGrid, GridCellParams, GridColumns, GridRowsProp, GridValueFormatterParams } from "@material-ui/data-grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ActionMenu from "./ActionMenu";

function SelectEditInputCell(props: GridCellParams) {
    const { id, api, value, field } = props;
    const [selected, setSelected] = useState("");

    const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
        setSelected(event.target.value as string);
        const editProps = {
            value: Number(event.target.value),
        };
        api.commitCellChange({ id, field, props: editProps });
        api.setCellMode(id, field, "view");
    };

    return (
        <Select
            labelId="demo-simple-select-label"
            autoWidth
            id="demo-simple-select"
            value={selected}
            onChange={handleChange}>
            <MenuItem value={10}>Transport</MenuItem>
            <MenuItem value={20}>Internet</MenuItem>
            <MenuItem value={30}>Rent</MenuItem>
        </Select>
    );
}

function renderSelectEditInputCell(params: GridCellParams) {
    return <SelectEditInputCell {...params} />;
}

export default function ProductsComponent() {
    const gridColumns: GridColumns = [
        {
            field: "id",
            type: "number",
            headerName: " ",
            renderCell: () => <ActionMenu />,
            width: 60,
            align: "left",
            sortable: false,
        },
        {
            field: "title",
            type: "string",
            headerName: "Title",
            width: 150,
            editable: true,
        },
        {
            field: "category",
            type: "string",
            headerName: "Category",
            width: 200,
            renderEditCell: renderSelectEditInputCell,
            editable: true,
        },
        {
            field: "transactionDate",
            type: "date",
            headerName: "Transaction Date",
            width: 200,
            editable: true,
        },
        {
            field: "amount",
            type: "number",
            headerName: "Amount",
            editable: true,
            width: 130,
            valueFormatter: (params: GridValueFormatterParams) => {
                return `£${params.value}`;
            },
        },
    ];

    const dataRows: GridRowsProp = [
        {
            id: 1,
            title: "bus ticket",
            category: "Transport",
            transactionDate: "2020-10-12",
            amount: 8.5,
        },
        {
            id: 2,
            title: "broadband bill",
            category: "Internet",
            transactionDate: "2020-10-16",
            amount: 22,
        },
    ];

    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid columns={gridColumns} rows={dataRows} disableColumnMenu />
        </div>
    );
}
