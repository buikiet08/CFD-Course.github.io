import React from 'react'

function Loading() {
  return (
    <div style={{
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}>
        <p style={{
            fontSize:20,
            fontWeight:'bold'
        }}>Đang tải dữ liệu ...</p>
    </div>
  )
}

export default Loading