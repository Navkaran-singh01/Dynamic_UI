1. Font

This section allows for detailed typographic control over two distinct text types:

Item Name: Controls the styling for primary titles and important labels (e.g., "Cozy Lounge Chair", section headers like "1. Arms", and the "Add to cart" button text).

Properties: Manages the styling for secondary or descriptive text (e.g., subtitles, color names).

For each text type, you can adjust:

Font Family: A dropdown menu to select from a predefined list of fonts.

Font Size: A range slider for precise size adjustments.

Font Weight: A range slider to control the text boldness.

2. Galleries/Images

This section controls the appearance of image galleries:

Gallery Alignment: Toggles for aligning the thumbnail column to the left, center, or right.

Spacing Between Images: A range slider to control the vertical gap between thumbnail images.

Image Border Radius: A range slider to adjust the roundness of the corners on the thumbnail images.

3. General Layout

This section manages the overall container and card styling:

Card Corner Radius: Adjusts the roundness of the main container cards.

Container Padding: Controls the internal spacing of the sidebar and other containers.

Section Background Color: A text input to change the background color of the accordion sections within the sidebar.

4. Stroke/Border

This section defines the properties of borders and dividers:

Stroke Color: Sets the color of borders used in the sidebar accordions and image options.

Stroke Weight: A range slider to control the thickness of these borders.

5. Button

This section provides extensive styling options for the primary "Add to cart" button:

Border Radius: A slider to make the button's corners more or less rounded.

Shadow: A dropdown to select from predefined box-shadow styles (none, small, medium, large).

Alignment: Toggles to position the button left, center, or right within its container.

Background & Text Color: Text inputs for precise color control of the button's fill and text.

Special Actions

The editor footer contains two main actions:

Change Appearance: This button triggers the toggleViewMode function from the store, switching the main preview between a desktop and a mobile layout.

Export Styles (Download icon): This button triggers the handleExport function, which:

Reads the entire current state from the useStore.

Formats the state into a clean, human-readable JSON object.

Creates a downloadable styles.json file, allowing the user to save their complete style configuration.