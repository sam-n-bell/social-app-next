import { GridColDef } from "@material-ui/data-grid"

export const mockTableData = [
    {id: 1, ikbId: 12, lastUpdated: "12/12/2020"},
    {id: 2, ikbId: 22, lastUpdated: "12/12/2020"},
    {id: 3, ikbId: 23, lastUpdated: "12/12/2020"},
    {id: 4, ikbId: 24, lastUpdated: "12/12/2020"},
    {id: 5, ikbId: 25, lastUpdated: "12/12/2020"}
]

export const mockTableDataColumns: GridColDef[] = [
    {field: "id", headerName: "ID"},
    {field: "ikbId", headerName: "IKB ID"},
    {field: "lastUpdated", headerName: "Last Updated", width: 200}
]