function StartPage() {
    return (
        <div style={{
            width:'100%',
            display:'flex', 
            justifyContent:'center'
        }}>
        
        <div  style= {{
            width:'600px',
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center'
        }}>
            <img style = {{width:'600px'}} src="https://st4.depositphotos.com/5045705/23346/v/600/depositphotos_233467822-stock-illustration-cat-dog-robot-cute-cartoon.jpg">
            </img>
            <h1>Para você gerenciar a saúde do seu pet com facilidade!</h1>
            <span>Você terá tudo o que precisa para gerenciar a saúde de seus pets.</span>
            <button style={{
                width:'188px',
                height:'46px',
                backgroundColor:'#F38040',
                borderRadius: '12px',
                border:'none'
            }}>Comece agora</button>
        </div>
    </div>
    );
}
export default StartPage;
