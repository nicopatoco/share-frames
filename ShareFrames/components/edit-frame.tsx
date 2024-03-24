import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"



export default function EditFrame() {
    return (
      <>
        <div className="grid lg:grid-cols-2 gap-6 px-4 py-6 m-8">

        <div className="space-y-6">

        <h1 className="text-2xl font-bold">Frame Details</h1>


        <div className="space-y-2 hidden">
            <Label htmlFor="frame_id">Frame Id</Label>
            <Input id="frame_id" value="235"/>
          </div>

        <div className="space-y-2">
            <Label htmlFor="name">Frame Title</Label>
            <Input id="name" placeholder="Blockchain Blog" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="origin_url">Origin URL for users to Read Online</Label>
            <Input id="origin_url" placeholder="https://medium.com/myblogsite" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Upload Cover Image</Label>
            <Input id="image" type="file" />
          </div>
        </div>

        <div className="space-y-6">
        <h1 className="text-2xl font-bold">Pages Content</h1>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page#</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Content</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Cover</TableCell>
                  <TableCell><select name="cars" id="cars">
                            <option value="volvo">Title</option>
                            <option value="saab">Cover Image</option>
                            </select>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="invisible">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell><Textarea className="min-h-[100px]" id="page2" placeholder="Enter marketing content" /></TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell><Textarea className="min-h-[100px]" id="page3" placeholder="Enter marketing content" /></TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>Conclusion</TableCell>
                  <TableCell>Subscribe Message</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Button className="mx-2" size="sm" variant="outline">Add Page</Button>
        </div>

        {/* <div className="space-y-6">
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
        </div> */}

      

      </div>

      <div className="text-black bg-white mb-32 mx-32 rounded-lg border-grey border-[1px] text-center shadow-md">
      {/* <h1 className="text-2xl w-30 font-semibold pt-5"> Create a new Share-Frame</h1> */}
      <div className="h-30 w-[500px] mx-auto pt-10 pb-5 flex flex-col">
        <img src="demothumbnail.svg" alt="logo" className="w-30 h-50 object-contain object-center mx-auto"></img>
      </div>
      <div className="pb-5">
      <Button className="mx-2">Refresh Preview</Button>
          <Button className="mx-2">Publish</Button>
      </div>
      </div>

      


      </>
)
  }
