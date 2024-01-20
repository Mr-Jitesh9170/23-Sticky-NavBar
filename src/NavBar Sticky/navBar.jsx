import "./navBar.scss"
import Img from "./music-1.jpg"
import { useState } from "react"
export const NavBarSticky = () => {
  const [css, setCss] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 77)
      setCss(true)
    else
      setCss(false)
  })

  return (
    <div className="navbar-sticky-container">
      <div className="container1">
        <div className="navbar" style={css ? { background: "white", color: "black", padding: "20px 30px" } : null}>
          <div className="leftnavbar">My Music</div>
          <div className="rightnavbar">
            <div className="li">Home</div>
            <div className="li">About</div>
            <div className="li">Service</div>
            <div className="li">Contact</div>
          </div>
        </div>
        <div className="content">
          <img src={Img} alt="" />
        </div>
      </div>
      <div className="con">
        <h1>Content</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellendus porro quaerat! Repellendus quis tempora delectus nostrum consequatur rerum reiciendis maxime eveniet? Dolorum, sequi eveniet ea magnam ducimus iure sit.
          Dolor sit ex dolore quae delectus provident quasi repellat, totam rem recusandae quia doloremque magnam! Voluptate, illo totam! Est minima iste unde sapiente commodi iure dolor nemo mollitia deserunt recusandae!
          Quos labore in vel? Asperiores quo, est iure accusamus quibusdam veniam consequuntur dolores eaque sunt doloribus repudiandae autem, alias magni recusandae praesentium earum soluta nobis ullam molestias. Laudantium, enim minima.
          Nisi iure cum aliquam? Vitae aliquid quos quaerat amet, nisi voluptas dignissimos, incidunt ea error, doloribus perspiciatis voluptatibus? Exercitationem quia quaerat facilis debitis tenetur. Earum nostrum officiis voluptas ea perspiciatis.
          Illum voluptates iste quae sequi culpa corporis velit quia dolorem, nihil vero doloribus, saepe possimus, cumque commodi consequatur. Aliquam nobis labore reiciendis sunt error modi praesentium rerum quidem dicta explicabo?
          Doloremque qui cum molestias, iure magni, iste cupiditate eveniet sed eius voluptates maxime saepe officia consectetur repellendus quae fuga eos. Perferendis saepe corporis nemo ipsam libero possimus aliquam beatae aliquid.
          Eligendi dicta ipsum ab reprehenderit mollitia quam quos, at, dolorum magni corrupti perspiciatis laudantium reiciendis debitis quidem suscipit! Repudiandae esse aliquam inventore iste cupiditate dolor est exercitationem ut magni saepe.
          Hic iste dicta explicabo temporibus, quos at repellat totam ipsam maiores sint libero quas, aliquam aliquid, praesentium commodi ea quaerat! A eligendi alias voluptate nemo animi dolores odit sapiente. Tempora!
          Hic voluptas doloribus eveniet, ab consequatur sit voluptatum veniam iure laudantium dolorem dolorum, amet quae pariatur alias excepturi, magnam sequi voluptates quam optio? Quibusdam, quae! Omnis soluta voluptatibus laborum pariatur.
          Asperiores ducimus facilis quasi officia dicta hic eveniet nam consectetur numquam saepe, quidem recusandae assumenda ipsum, accusantium perspiciatis veritatis et laboriosam doloremque nulla temporibus consequatur omnis id. Et, nisi unde.
          Voluptates ratione nemo placeat eligendi deleniti tenetur velit hic repudiandae. Repellat excepturi dolorem culpa, error, vitae obcaecati distinctio rem incidunt saepe id eius. Eius vitae ad fugit enim ratione cumque!
          Quo eum fuga perspiciatis voluptatum velit quidem libero nemo, natus deserunt nihil culpa in id sint eos, error consectetur, rem earum. Praesentium dolorem assumenda ut ipsum voluptates sequi minima ratione.
          Ex laborum saepe cumque exercitationem totam, cupiditate consectetur odio minus recusandae repellendus minima accusamus eos officia? Incidunt praesentium suscipit architecto officia ipsum ducimus, aliquam quas delectus sit impedit tenetur porro.
          Distinctio, consequatur repellendus nobis officia corporis sint architecto laborum dicta, ab maxime excepturi itaque? Nihil, sit quae praesentium laudantium veniam corrupti quaerat dolorem aliquid! Maxime laborum delectus laboriosam. Placeat, corporis.
          Perferendis maxime quos voluptatum voluptatibus dignissimos totam facilis unde! Quibusdam, incidunt dolore temporibus necessitatibus dignissimos a repellendus iure molestiae beatae minus odit aliquam error laboriosam ex inventore distinctio libero fuga.
          Id, praesentium dolorum, nihil, laborum excepturi quod totam hic odit qui voluptas architecto voluptates saepe quas provident? Recusandae voluptas, beatae voluptatum doloremque aperiam veritatis. Quia optio itaque et officia commodi?
          Excepturi laboriosam aut voluptatem iste libero aliquam quasi, cumque veniam provident, voluptates odio a ut asperiores nam delectus molestiae voluptatibus neque, porro impedit! Illo laborum harum sapiente nesciunt dicta nisi.
          Autem laudantium eligendi et voluptate a explicabo ea soluta quos sequi eum saepe numquam, nostrum veniam quibusdam aliquam dolorum commodi illum obcaecati voluptatibus nam iusto aut. Beatae quis soluta provident?
          Quibusdam nam, non veritatis quasi voluptatem aut et, quas dolor eligendi quo, hic sed? Dicta esse neque doloribus sint odio excepturi unde temporibus quibusdam molestiae sapiente vel, aspernatur reiciendis! Ducimus?
          Necessitatibus unde cumque deleniti ipsa autem dolorem consectetur dolorum tempora laudantium, beatae minus deserunt nihil et, similique incidunt laboriosam pariatur sequi natus ea numquam ducimus aliquid. Doloribus sequi repudiandae pariatur.</p>
      </div>

      <div className="con">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellendus porro quaerat! Repellendus quis tempora delectus nostrum consequatur rerum reiciendis maxime eveniet? Dolorum, sequi eveniet ea magnam ducimus iure sit.
          Dolor sit ex dolore quae delectus provident quasi repellat, totam rem recusandae quia doloremque magnam! Voluptate, illo totam! Est minima iste unde sapiente commodi iure dolor nemo mollitia deserunt recusandae!
          Quos labore in vel? Asperiores quo, est iure accusamus quibusdam veniam consequuntur dolores eaque sunt doloribus repudiandae autem, alias magni recusandae praesentium earum soluta nobis ullam molestias. Laudantium, enim minima.
          Nisi iure cum aliquam? Vitae aliquid quos quaerat amet, nisi voluptas dignissimos, incidunt ea error, doloribus perspiciatis voluptatibus? Exercitationem quia quaerat facilis debitis tenetur. Earum nostrum officiis voluptas ea perspiciatis.
          Illum voluptates iste quae sequi culpa corporis velit quia dolorem, nihil vero doloribus, saepe possimus, cumque commodi consequatur. Aliquam nobis labore reiciendis sunt error modi praesentium rerum quidem dicta explicabo?
          Doloremque qui cum molestias, iure magni, iste cupiditate eveniet sed eius voluptates maxime saepe officia consectetur repellendus quae fuga eos. Perferendis saepe corporis nemo ipsam libero possimus aliquam beatae aliquid.
          Eligendi dicta ipsum ab reprehenderit mollitia quam quos, at, dolorum magni corrupti perspiciatis laudantium reiciendis debitis quidem suscipit! Repudiandae esse aliquam inventore iste cupiditate dolor est exercitationem ut magni saepe.
          Hic iste dicta explicabo temporibus, quos at repellat totam ipsam maiores sint libero quas, aliquam aliquid, praesentium commodi ea quaerat! A eligendi alias voluptate nemo animi dolores odit sapiente. Tempora!
          Hic voluptas doloribus eveniet, ab consequatur sit voluptatum veniam iure laudantium dolorem dolorum, amet quae pariatur alias excepturi, magnam sequi voluptates quam optio? Quibusdam, quae! Omnis soluta voluptatibus laborum pariatur.
          Asperiores ducimus facilis quasi officia dicta hic eveniet nam consectetur numquam saepe, quidem recusandae assumenda ipsum, accusantium perspiciatis veritatis et laboriosam doloremque nulla temporibus consequatur omnis id. Et, nisi unde.
          Voluptates ratione nemo placeat eligendi deleniti tenetur velit hic repudiandae. Repellat excepturi dolorem culpa, error, vitae obcaecati distinctio rem incidunt saepe id eius. Eius vitae ad fugit enim ratione cumque!
          Quo eum fuga perspiciatis voluptatum velit quidem libero nemo, natus deserunt nihil culpa in id sint eos, error consectetur, rem earum. Praesentium dolorem assumenda ut ipsum voluptates sequi minima ratione.
          Ex laborum saepe cumque exercitationem totam, cupiditate consectetur odio minus recusandae repellendus minima accusamus eos officia? Incidunt praesentium suscipit architecto officia ipsum ducimus, aliquam quas delectus sit impedit tenetur porro.
          Distinctio, consequatur repellendus nobis officia corporis sint architecto laborum dicta, ab maxime excepturi itaque? Nihil, sit quae praesentium laudantium veniam corrupti quaerat dolorem aliquid! Maxime laborum delectus laboriosam. Placeat, corporis.
          Perferendis maxime quos voluptatum voluptatibus dignissimos totam facilis unde! Quibusdam, incidunt dolore temporibus necessitatibus dignissimos a repellendus iure molestiae beatae minus odit aliquam error laboriosam ex inventore distinctio libero fuga.
          Id, praesentium dolorum, nihil, laborum excepturi quod totam hic odit qui voluptas architecto voluptates saepe quas provident? Recusandae voluptas, beatae voluptatum doloremque aperiam veritatis. Quia optio itaque et officia commodi?
          Excepturi laboriosam aut voluptatem iste libero aliquam quasi, cumque veniam provident, voluptates odio a ut asperiores nam delectus molestiae voluptatibus neque, porro impedit! Illo laborum harum sapiente nesciunt dicta nisi.
          Autem laudantium eligendi et voluptate a explicabo ea soluta quos sequi eum saepe numquam, nostrum veniam quibusdam aliquam dolorum commodi illum obcaecati voluptatibus nam iusto aut. Beatae quis soluta provident?
          Quibusdam nam, non veritatis quasi voluptatem aut et, quas dolor eligendi quo, hic sed? Dicta esse neque doloribus sint odio excepturi unde temporibus quibusdam molestiae sapiente vel, aspernatur reiciendis! Ducimus?
          Necessitatibus unde cumque deleniti ipsa autem dolorem consectetur dolorum tempora laudantium, beatae minus deserunt nihil et, similique incidunt laboriosam pariatur sequi natus ea numquam ducimus aliquid. Doloribus sequi repudiandae pariatur.</p>
      </div>
    </div>
  )
}