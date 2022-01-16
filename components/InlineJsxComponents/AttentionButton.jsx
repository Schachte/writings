export default function AttentionButton({link}) {
    return (
        <div style={{
                "width": "100%",
                "height": "50px",
                "fontFamily": "Arimo",
                "fontSize": "1.5rem",
                "textAlign": "center",
                "backgroundColor": "#E7FBBE",
                "display": "flex",
                "alignItems": "center",
                "borderRadius": "5px",
                "justifyContent": "center",
                "cursor": "pointer",
                "color": "black"
        }}>
            <a style={{all: "unset"}} href={link} target="_blank">View Github Repository Here</a>
        </div>
    )
}
