import Head from "next/head";

export function Seo(props){
    const {title= "Game Store",
        description=" Every games for x-box, PlayStation,Nintentdo,pc"}=props

    return (
        <Head>
           <title>{title}</title> 
           <meta property="description" content={description}/>
        </Head>
    )
}