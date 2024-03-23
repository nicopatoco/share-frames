import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useRouter } from 'next/navigation'

export default function MyFramesSection() {

  const router = useRouter();

  const createFrameSet = () => {
    console.log("Create a frame set");
    router.push("/frame");
  };

  const editFrameSet = () => {
    console.log("Create a frame set");
    router.push("/frame");
  };

  const deleteFrameSet = () => {
    console.log("Create a frame set");
    //router.push("/frame");
  };

  return (
        <div className="m-16">

<div className="w-full h-full flex flex-col">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-semibold">Frames Dashboard</h1>
        <Button className="bg-green-500 text-white" onClick={createFrameSet}>New Record</Button>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Frame ID</TableHead>
              <TableHead>Attribute 1</TableHead>
              <TableHead>Attribute 2</TableHead>
              <TableHead>Attribute 3</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button className="bg-blue-500 text-white" onClick={editFrameSet}>Edit</Button>
                  <Button className="bg-red-500 text-white" onClick={deleteFrameSet}>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell>Data 5</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button className="bg-blue-500 text-white" onClick={editFrameSet}>Edit</Button>
                  <Button className="bg-red-500 text-white" onClick={deleteFrameSet}>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Data 7</TableCell>
              <TableCell>Data 8</TableCell>
              <TableCell>Data 9</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button className="bg-blue-500 text-white" onClick={editFrameSet}>Edit</Button>
                  <Button className="bg-red-500 text-white" onClick={deleteFrameSet}>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
        </div>
    )
  }
