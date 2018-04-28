Pixel

fragment Test

AutoBlock

inputs
{
    // Custom Inputs
    texture TestTexture;
    float EdgeFalloffPower;
    float EdgeFalloffScale;
    float4 EdgeGlowColor;

    //Built In
    // View Space Normal
    float3 Normal;
    // Us from mesh
    float2 Uv;
    // Time in seconds
    float Time;
    // Object color from model
    //float4 ObjectColor;
    // Position in view space
    float3 PixelPosition;
    //Eye is at 0,0,0  
}

outputs
{
    //Color added to the surface
    float4 Additive;
    
    //Surface effected by lighting
    //float4 SurfaceColor;
}

fragmentCode

void Test(inout Data data)
{
    // Simple edge glow
    /*float4 texColor = tex2D(TestTexture, data.Uv);
    float scalar = saturate(1 - dot( -normalize(data.PixelPosition), data.Normal ));   
    scalar = pow( scalar, data.EdgeFalloffPower) * data.EdgeFalloffScale;
    data.Additive = scalar * data.EdgeGlowColor * texColor;*/
    
    float4 col = tex2D(TestTexture, data.Uv);
    col = 1 - col; 
    data.Additive = col;
    
}