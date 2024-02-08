export function NoteCard(){
    return(
        <button className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
            <span className='text-sm font-medium text-slate-200'>
                há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nobis asperiores aliquid sed excepturi atque, saepe, ut, quis
                enim consequatur voluptatum debitis in ratione corrupti aspernatur?
                Qui sunt odit eaque molestias!              
            </p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}