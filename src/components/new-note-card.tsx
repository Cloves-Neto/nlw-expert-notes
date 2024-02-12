import * as Dialog from '@radix-ui/react-dialog'
import { set } from 'date-fns';
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'



export function NewNoteCard(){
    // Função de estado do botão:  Array com os nomes de estado da função, estado inicial e o 'set' - estado e mudança
    const [shouldShowOnborading, setShouldShowOnboarding] = useState(true)
    // Função de estado salvar nota
    const [content, setContent] = useState('');

    // Função de estado do botão: Troca estado do useState de 'true para 'false' com o segundo nome da constante.
    function handleStartEditor (){
        setShouldShowOnboarding(false)  
    }

    // Função de estado, troca de Onboarding
    function handleContentChange(event:ChangeEvent<HTMLTextAreaElement>){
        setContent(event.target.value)
        
        if (event.target.value === ''){
            setShouldShowOnboarding(true)  
        }
    } 

    function handleSaveNote(event: FormEvent){
        event.preventDefault()

    }
    return(
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md bg-slate-700 p-5 flex flex-col text-left gap-3 overflow-hidden hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
                <span className='text-sm font-medium text-slate-200'>
                    Adicionar nota
                </span>
                <p className='text-sm leading-6 text-slate-400'>
                    Grave uma nota em audio e transcreva para texto automaticamente
                </p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60' />
                <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none'>
                    <Dialog.Close className='absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-red-400'>
                        <X className='size-5' />
                    </Dialog.Close>
                    
                    <form  onSubmit={handleSaveNote} className='flex flex-1 flex-col'>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-slate-200'>
                                Adicionar nota
                            </span>
                            {shouldShowOnborading ? (
                                <p className='text-sm leading-6 text-slate-400'>
                                Comece <button  className='font-medium text-lime-400 hover:underline'>gravado uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline'>use apenas texto</button>.
                            </p>
                            ): (
                                <textarea 
                                    autoFocus
                                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none outline-none flex-1"
                                    onChange={handleContentChange}
                                    ></textarea>
                            )}
                        </div> 

                        <button type="submit" className='w-full bg-lime-400 py-4 text-center text-sm text-lime-900 outline-none font-medium group hover:bg-lime-500  font-medium'>
                            <span className='group-hover:text-white'>Salvar nota</span>
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}