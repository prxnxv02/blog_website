import React from 'react'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga0ZLFmGU0r4EcnP8Y-Mso4OklGh2o542zg&s" alt="" />
      <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/wite?edit=2`}>
        <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
      </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestiae voluptatem quibusdam cupiditate deleniti, sapiente eos saepe modi, illo aliquam labore, vel voluptas. Fugit perferendis et harum magnam sunt neque?<br /><br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis amet tenetur iusto ut suscipit? Quia recusandae quam nam, at id corrupti, sunt qui cupiditate eum veniam saepe eveniet ullam.<br /><br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quis perspiciatis excepturi quidem a expedita laboriosam repudiandae aliquid accusantium necessitatibus reprehenderit quasi velit odit voluptatem iusto mollitia, assumenda magni tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ratione repudiandae quas culpa enim ipsam, repellendus quidem reiciendis esse quibusdam quasi molestiae dolorum deserunt earum, ducimus et. Libero, ipsum illum. <br /><br />
      </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single