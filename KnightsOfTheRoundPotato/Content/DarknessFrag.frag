Pixel

fragment DarknessFrag

AutoBlock

inputs
{
    // Custom Inputs
    texture MyTexture;
    texture OtherTexture;

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

void DarknessFrag(inout Data data)
{
    // Simple edge glow
    /*float4 texColor = tex2D(TestTexture, data.Uv);
    float scalar = saturate(1 - dot( -normalize(data.PixelPosition), data.Normal ));   
    scalar = pow( scalar, data.EdgeFalloffPower) * data.EdgeFalloffScale;
    data.Additive = scalar * data.EdgeGlowColor * texColor;*/
    
    
    
}