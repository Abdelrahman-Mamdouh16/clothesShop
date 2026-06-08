
export default function Rolls({ img, title, desc }) {
  return (

    <div className="rounded-lg p-5 flex items-center justify-center flex-col text-center">
      <img src={img} alt={title} className="w-12" />
      <h3 className="font-semibold my-2">{title}</h3>
      <p className="text-secondary/60 dark:text-primary-100">{desc}</p>
    </div>

  )
}
