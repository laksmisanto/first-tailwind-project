import Image from "next/image";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <>
      <div className="banner__section bg-[url('../assets/bg.jpg')] bg-center ">
        <div className="banner__container w-full h-screen bg-[linear-gradient(135deg,_rgba(13,16,40,1)_0%,_rgba(13,16,40,0.6)_35%,_rgba(255,82,2,0.8)_100%)]">
          <div className="container w-full h-full flex items-center justify-center">
            <div className="banner__content w-2/3 text-center mx-auto">
              {/* <Image src={bg} alt="img" height={300} width={500} /> */}
              <h1 className="font-bold text-[84px] capitalize text-white ">
                better education for a better world.
              </h1>
              <p className="px-44 text-lg text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                pariatur cupiditate tenetur aperiam. Sed, alias!
              </p>
              <button className="uppercase text-xl mt-10 px-10 py-5 bg-[#FF5202] transition ease-in-out duration-300 hover:bg-[#0D1028]  text-slate-50">
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="service__section">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea
          voluptatum ducimus officiis, doloribus assumenda natus asperiores
          aliquam? Animi repellendus nulla suscipit maiores, aspernatur itaque
          excepturi corrupti! A, omnis sit autem est aspernatur corrupti id
          repudiandae in nobis optio cumque magni eveniet dolorum repellat, iure
          excepturi corporis. Eligendi voluptates porro perferendis soluta illo
          aperiam dolorem cumque, velit recusandae distinctio nemo quasi ipsam.
          Deleniti, natus! Consectetur id aspernatur, quae a, eaque ut ullam
          modi rem dolores quod temporibus deserunt repellendus consequuntur est
          alias minima cupiditate. Totam, quisquam repudiandae animi
          necessitatibus ipsa praesentium est, fuga molestias eaque labore
          reiciendis accusantium mollitia! Aspernatur sit nulla nihil, odit,
          officiis voluptatum labore magnam maxime tempore, modi voluptatibus!
          Ullam sint inventore, iure, sequi tempore dolore, rerum cupiditate
          quae ex quisquam molestias excepturi. Optio eveniet harum voluptas
          provident, dolorum facere iure ab soluta quod ut. Nam dolor quaerat
          culpa voluptates, ex minus consequatur maiores voluptatibus nulla? A
          corporis incidunt, provident tempora laborum commodi accusantium
          perferendis natus officia voluptate error ducimus dignissimos maiores,
          exercitationem non velit quam repudiandae. Magni dolores similique
          eligendi atque veritatis deleniti at perferendis dolorem dolor
          recusandae sapiente non sit fuga ducimus esse vero maiores sequi quod
          quas quisquam voluptatibus, quos facere aut! Dolorum, ipsum
          consequatur. Maxime nihil nulla eius nobis aliquam reiciendis
          provident? Tenetur aspernatur repellat libero optio saepe? Optio
          doloribus saepe sit reprehenderit modi hic dolorum consequatur
          accusamus ipsa, quia soluta voluptatum quod fugiat. Possimus quis
          laboriosam fugit dolor maiores dolore illo impedit est laudantium
          voluptas id deleniti ipsa, doloribus modi alias vel itaque facilis
          nobis ut! Officia ad non reiciendis laudantium quisquam sequi
          nesciunt, recusandae necessitatibus. Inventore velit a cumque iusto
          quas assumenda omnis suscipit alias, minus consectetur voluptatibus
          ullam, itaque adipisci non nobis exercitationem libero asperiores
          commodi ducimus nostrum modi vel provident. Hic ab provident velit
          repellat cumque, reiciendis distinctio est?
        </p>
      </div>
    </>
  );
}
