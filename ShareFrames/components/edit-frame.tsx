import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"



export default function EditFrame() {
    return (
        <div className="grid lg:grid-cols-2 gap-6 px-4 py-6 m-8">

        <div className="space-y-6">

        <h1 className="text-2xl font-bold">Frame Information</h1>

        <div className="space-y-2">
            <Label htmlFor="title">Frame Name</Label>
            <Input id="title" placeholder="Enter title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">External URL</Label>
            <Input id="title" placeholder="Enter title" />
          </div>


          <h1 className="text-2xl font-bold">Frame Pages</h1>
          <Button className="mx-2">Add Page</Button>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sample Title 1</TableCell>
                  <TableCell>Sample Description 1</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sample Title 2</TableCell>
                  <TableCell>Sample Description 2</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Button className="mx-2">Preview Frame</Button>
          <Button className="mx-2">Publish</Button>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Frame Details</h1>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea className="min-h-[100px]" id="description" placeholder="Enter description" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" />
          </div>
        </div>

      </div>
)
  }
