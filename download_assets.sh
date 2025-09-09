#!/bin/bash

# Create assets directory if it doesn't exist
mkdir -p "/Users/zyad/Documents/ENHERTU patient profile/enhertu-profile/public/assets"

# Array of all unique asset URLs
assets=(
    "http://localhost:3845/assets/0492412761c8509e31e902d4f01c535a5b33ea9d.svg"
    "http://localhost:3845/assets/0a8f93ce89120f39f92a645ee9cb2f0b34eb570c.svg"
    "http://localhost:3845/assets/1415150a9a5ad09578102bea03302c348276cce1.svg"
    "http://localhost:3845/assets/154d389c8c393d5c4ba5824a2cf1bb42d4766fd5.svg"
    "http://localhost:3845/assets/1cb37998c0178ed5bb98118e77902f2b56b5161e.svg"
    "http://localhost:3845/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg"
    "http://localhost:3845/assets/341d48a0c7406ac7cf7f218af5a5994c573e0fea.svg"
    "http://localhost:3845/assets/3872ad762fe95539f6bb5fe0e1eda36575871062.svg"
    "http://localhost:3845/assets/3e9970ddda17ebf235d24396df2b7b4d600d4466.png"
    "http://localhost:3845/assets/3f304a5d2077845a4fe4cb50cacb1c488435e2ff.png"
    "http://localhost:3845/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg"
    "http://localhost:3845/assets/6067c24d639d7f53d8e02f54bb206f202603bae2.png"
    "http://localhost:3845/assets/65a917a95ec4327e2da704d3cdbc0cfd3e8a2d79.svg"
    "http://localhost:3845/assets/739e8ffddd0a204f9d32d1d29746484413531536.png"
    "http://localhost:3845/assets/7a436235d6ca2c93df28cc7b436bf16e5f547a89.png"
    "http://localhost:3845/assets/7cea05f9e479e26e68d418e9f103f3ca6341950e.svg"
    "http://localhost:3845/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg"
    "http://localhost:3845/assets/955575a9c724c363258e4b21ead3b46a80bfb6e6.svg"
    "http://localhost:3845/assets/96ec5b8ed2fa23d37d3d1e8d9f908f1733bdf681.svg"
    "http://localhost:3845/assets/9a1a2ff291c25a4c4d9f1a6afa74db2145c7289f.png"
    "http://localhost:3845/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg"
    "http://localhost:3845/assets/9f064e7469cf4c412994cd586bf5f892223a6a46.svg"
    "http://localhost:3845/assets/a4e2363bcdcacb0f9d385dd1cc38972a6c3b82db.png"
    "http://localhost:3845/assets/aee53a0377d0b242aeb7d3a535bfb57a93635b99.svg"
    "http://localhost:3845/assets/b13d17266d13676b59998a7bdacdaa37df6bae5c.svg"
    "http://localhost:3845/assets/b1e07bba62b74412085777b8615576fe1675df2b.png"
    "http://localhost:3845/assets/b54881f76a1d3a7fbe0dc8639e89f85a9e9201cb.svg"
    "http://localhost:3845/assets/b5e1855b59335aea6be52c1e450d97f243cb25a3.svg"
    "http://localhost:3845/assets/bba9e41063c51cc6af565dac1f9be78110d748f5.svg"
    "http://localhost:3845/assets/c0b63a220fb0120f05a07ee0bb543bcd6909f177.svg"
    "http://localhost:3845/assets/c96892880fc45d921df62ae70aad2d9529eb52f5.svg"
    "http://localhost:3845/assets/e092922d4f4e41aa6af343efbbec9d76d019f1c0.svg"
    "http://localhost:3845/assets/e1a3109de4a4f7b0a552c8c024e8fcfed309a2dd.png"
    "http://localhost:3845/assets/e846be4806700cba6a04b85875a09240d9a16601.svg"
    "http://localhost:3845/assets/ea6d40caed0cc5e3efe1b564ac1374474ea0738b.svg"
    "http://localhost:3845/assets/f74766b67109569552a5a61be5a8cfb9605d8c13.svg"
)

# Download each asset
for url in "${assets[@]}"; do
    # Extract filename from URL
    filename=$(basename "$url")
    echo "Downloading $filename..."
    
    # Download the file
    curl -s -o "/Users/zyad/Documents/ENHERTU patient profile/enhertu-profile/public/assets/$filename" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✓ Downloaded $filename"
    else
        echo "✗ Failed to download $filename"
    fi
done

echo "Download complete!"
