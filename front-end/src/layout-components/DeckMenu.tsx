
export function DeckMenu({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-16 mt-10">                
            {children}
        </div>        
    )
}
