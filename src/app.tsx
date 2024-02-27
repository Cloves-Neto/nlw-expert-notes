import Logo from './assets/logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'


export function App() {
  return(      
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} />
      <form className='w-full'>
        <input
        type="text" 
        placeholder='Busque as suas notas...'
        className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 '
        />  
      </form>
      {/* Linha divisória de conteúdo */}
      <div className='h-px bg-slate-700' />

      {/* Area de cards de anotação */}
      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
          {/*Cards de notas */}
          <NewNoteCard></NewNoteCard>
          <NoteCard note={{
            date: new Date(),
            content: 'Hello world'
          }}>

          </NoteCard>
      </div>
    </div>
  )    
}



