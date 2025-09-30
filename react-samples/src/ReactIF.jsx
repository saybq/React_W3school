function ReactIF(){

    const x = 5;
    let y = "Apple";
    if (x < 10) {
        y = "Banana";
    }

    const k = 10;
    
    return (
        <>
            <h1>{y}</h1>
            <h1>{(k) < 10 ? "Banana" : "Apple"}</h1>
        </>
        
    );
}

export default ReactIF