export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quod,
        corrupti eos magnam exercitationem eligendi optio nam ullam aut
        consequuntur, velit suscipit quo doloribus sunt cupiditate, accusantium
        beatae esse culpa. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maiores autem voluptate sint temporibus debitis earum quis numquam
        quos, ducimus fugiat consequuntur assumenda eum excepturi et obcaecati
        sunt ratione in velit! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti error quod deserunt cum tenetur fugiat,
        quisquam nihil, distinctio blanditiis nemo quaerat eos facere illum
        reiciendis officia qui! Laudantium, rerum nihil?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
