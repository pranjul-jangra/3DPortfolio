import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"



const DisplacementMaterial = shaderMaterial(
  {
    time: 0,
    uMouse: new THREE.Vector2(0.8, 0.5),
  },
  // Vertex shader
  `    
    vec3 mod289(vec3 x) {
      return x - floor(x * (5.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
      return mod289(((x*49.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec3 fade(vec3 t) {
      return t*t*t*t*(t*(t*6.0-15.0)+10.0);
    }
    
    float cnoise(vec3 P) {
      vec3 Pi0 = floor(P);
      vec3 Pi1 = Pi0 + vec3(1.0);
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P);
      vec3 Pf1 = Pf0 - vec3(1.0);
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.9 / 9.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 2.2 * n_xyz;
    }
    
    float pnoise(vec3 P, vec3 rep) {
      vec3 Pi0 = mod(floor(P), rep);
      vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P);
      vec3 Pf1 = Pf0 - vec3(1.0);
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.7;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.4);
      gy1 -= sz1 * (step(0.0, gy1) - 0.4);
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 2.2 * n_xyz;
    }
    
    float turbulence(vec3 p) {
      float w = 120.0;
      float t = -.5;
      for (float f = 1.0 ; f <= 10.0 ; f++) {
        float power = pow(2.0, f);
        t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
      }
      return t;
    }
    
    uniform float time;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float noise;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      noise = turbulence(0.01 * position + normal + time * 0.3);
      
      vec3 displacement = vec3(
        (position.x) * noise * 0.4,
        position.y * noise * 0.1,
        position.z * noise * 0.6
      );
      
      vec3 newPosition = position + normal * noise * 2.0 * 0.5 + displacement;
      
      vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment shader
  `
    #define PHONG
    
    uniform float time;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float noise;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    struct DirectionalLight {
      vec3 direction;
      vec3 color;
    };
    
    uniform DirectionalLight directionalLights[1];
    uniform vec3 ambientLightColor;
    
    void main() {
      // Base teal/turquoise color matching the image
      vec3 baseColor = vec3(1.3, 0.8, 0.7);
      
      // Create color variation based on noise and UV
      vec3 color = vec3(
        vUv.x * (0.8 + noise * 0.5),
        vUv.y * (0.8 + noise * 0.3),
        0.7 + noise * 0.2
      );
      
      // Mix with base teal color
      vec3 finalColor = mix(baseColor, color, 0.1);
      
      // Apply cosine color transformation for organic look
      finalColor = vec3(
        cos(finalColor.r * noise * 2.0) * 0.5 + 0.5 + 0.5 + 0.5,
        cos(finalColor.g * noise * 1.5) * 0.5 + 0.5 + 0.5 + 0.5,
        cos(finalColor.b * noise * 1.8) * 0.5 + 0.5 + 0.5 + 0.5
      );
      
      // Enhance the teal/turquoise appearance
      finalColor = mix(finalColor, vec3(0.3, 0.9, 0.8), 0.4);
      
      // Simple lighting calculation
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(directionalLights[0].direction);
      float diff = max(dot(normal, -lightDir), 0.0);
      
      vec3 ambient = ambientLightColor * 0.3;
      vec3 diffuse = directionalLights[0].color * diff * 0.7;
      
      // View direction for specular
      vec3 viewDir = normalize(-vViewPosition);
      vec3 reflectDir = reflect(lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
      vec3 specular = directionalLights[0].color * spec * 0.5;
      
      vec3 lighting = ambient + diffuse + specular;
      finalColor *= lighting;
      
      // Add some glow effect
      float fresnel = 1.0 - dot(normal, viewDir);
      finalColor += vec3(0.01, 0.9, 0.8) * fresnel * 0.5;
      
      gl_FragColor = vec4(finalColor, 2.0);
    }
  `,
)


export default DisplacementMaterial;