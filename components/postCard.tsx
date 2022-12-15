import Image from "next/image"

type Props = {
    title: string,
    image: {url:string, alt:string},
    link: string
}

const PostCard = ({ title, image, link }: Props) => {
    return (<li className="max-w-[296px] bg-[#FDFDFD]/30 border border-white rounded-[30px] backdrop-blur-sm p-5">
        <div className="flex gap-2 mb-5 items-center">
        <Image src={image.url} alt={image.alt} className="w-[132px] h-[132px] rounded-[20px]"/>
        <h3 className="max-w-[176px] truncate text-black font-medium text-[16px] leading-[1.5]">{title}</h3>
        </div>
        <a href={link} className="w-[200px] bg-rose-600 rounded-[30px] block text-center py-3 text-white font-medium text-[16px] leading-[1.5]">Дізнатися більше</a>
    </li>)
}

export default PostCard