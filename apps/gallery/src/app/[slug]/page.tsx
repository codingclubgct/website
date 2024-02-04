import { events } from "@/lib/events"

export default function Page({ params:{slug} }: { params: { slug: string } }) {
    const event = events.find((item)=>item.slug===slug)
    return <div>
      <img src={event?.photo}></img>
    </div>
}