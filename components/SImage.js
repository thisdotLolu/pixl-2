import Image from "next/image"

const SImage = ({ identifier, image }) => {
   return (
      <div className={identifier === "main-image" ? "main-image" : "image"}>
         <Image src={urlFor(image).auto('format')} alt="image" width="100" height="100" />
      </div>
   )
}

export default SImage