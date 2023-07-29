import SongForm from '../shared/SongForm'
import { createSong } from '../../api/songs'
import { useNavigate } from 'react-router-dom'
import { createSongSuccess, createSongFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'

const CreateSong = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    // const [ selected, setSelected ] = useState(null)
    const [song, setSong] = useState({
        embedIds: null,
        // title: '',
        // hymnNumber:'',
        // composer:  '',
        // lyricist: '',
        // type: '',
        // source: '',
        // lyrics:'',
        // // scorePDF:'',
        // recordings:'',
        // embedId: ''
    })
    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        console.log('e.target.files[0]', e.target.files[0]) 
        setFileName(e.target.files[0])
        console.log('e.target.files[0].name', e.target.files[0].name)

    };
    console.log('this is song in createSong', song)
    // const handleChange = (e) => {
    //     setSong(prevSong => {
    //         const updatedValue = e.target.value 
    //         const updatedName = e.target.name 
    //         const updatedSong = {
    //             [updatedName]: updatedValue
    //         }
    //         return {
    //             ...prevSong,
    //             ...updatedSong
    //         }

    //     })
    // }
    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "embedId") {
          const embedIds = value ? value.split(",").map((id) => id.trim()) : null;
          setSong((prevSong) => ({ ...prevSong, [name]: embedIds }));
        //   console.log('set song', song)
        } else {
          setSong((prevSong) => ({ ...prevSong, [name]: value }));
        }
      };
      

    const handleSubmit = (e) => {
        e.preventDefault()
        // added this janke
        // const data = new FormData()
        // data.append('upload', selected)
        createSong(user, song, fileName)
            .then(res => { navigate(`/songs/${res.data.song._id}`)})
            // .then(res => console.log('this is the res from api call', res))
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createSongSuccess,
                    variant: 'success'
                })
            })
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createSongFailure,
                    variant: 'danger'
                }))
    }

    return <SongForm song={song} handleSubmit={handleSubmit} handleChange={handleChange} onChangeFile={onChangeFile}/>
}

export default CreateSong