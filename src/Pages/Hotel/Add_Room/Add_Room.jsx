import './Add_Room.css'
import { Dialog } from "@mui/material";
import ImageInput from '../../../Components/input/imageinput/imageinput';

const Add_Room = () => {
  return (

    <Dialog open={true}>
      <div className="add-room-container">
     

        <div className="upload-image">
          <ImageInput />
        </div>

      </div>

    </Dialog>

  )
}

export default Add_Room
