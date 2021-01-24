import React from "react"

interface InputProps {
    videoSrcURL: string
    videoTitle: string
}

export const Video = React.forwardRef<HTMLIFrameElement, InputProps>(
    (
        { 
            videoSrcURL, 
            videoTitle, 
            ...rest 
        }
    ) => (
        <iframe 
        style= {{ position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
            }}  
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
        {...rest}
        />
    )
);