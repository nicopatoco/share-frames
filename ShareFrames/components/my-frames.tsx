import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useRouter } from 'next/navigation'
import { Badge } from "@/components/ui/badge"

export default function MyFramesSection() {

  const router = useRouter();

  const createFrameSet = () => {
    console.log("Create a frame set");
    router.push("/frame");
  };

  const viewSubscribers = () => {
    console.log("View Subscribers");
    router.push("/subscribers");
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
        <div className="m-4">

<div className="w-full h-full flex flex-col">
      <header className="flex items-center justify-center p-4 border-b">
        <h1 className="text-2xl font-semibold">Manage Your Share-frames</h1>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Rewards</TableHead>
              <TableHead>convertion</TableHead>
              <TableHead>Reshares</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>#234</TableCell>
              <TableCell>10/02/24</TableCell>
              <TableCell><Badge variant="secondary">pending</Badge></TableCell>
              <TableCell>34</TableCell>
              <TableCell>122</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button className="bg-black text-white" onClick={editFrameSet}>Edit</Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>#233</TableCell>
              <TableCell>09/01/20</TableCell>
              <TableCell><Badge variant="secondary">pending</Badge></TableCell>
              <TableCell>34</TableCell>
              <TableCell>122</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button className="bg-black text-white" onClick={editFrameSet}>Edit</Button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>#232</TableCell>
              <TableCell>08/12/18</TableCell>
              <TableCell><Badge variant="success">Delivered</Badge></TableCell>
              <TableCell>34</TableCell>
              <TableCell>122</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button className="bg-black text-white" onClick={editFrameSet}>Edit</Button>
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
