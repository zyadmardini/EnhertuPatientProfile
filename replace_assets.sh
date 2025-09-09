#!/bin/bash

# Directory containing the component files
COMPONENTS_DIR="/Users/zyad/Documents/ENHERTU patient profile/enhertu-profile/src/components"

# Function to replace localhost URLs with asset paths
replace_assets() {
    local file="$1"
    echo "Processing $file..."
    
    # Replace all localhost URLs with /assets/ paths
    sed -i '' 's|http://localhost:3845/assets/|/assets/|g' "$file"
    
    echo "✓ Updated $file"
}

# Process all component files
for file in "$COMPONENTS_DIR"/*.tsx; do
    if [ -f "$file" ]; then
        replace_assets "$file"
    fi
done

echo "All asset references have been updated!"
