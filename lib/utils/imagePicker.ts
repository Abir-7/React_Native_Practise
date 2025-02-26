import * as ImagePicker from "expo-image-picker";

export const imagePicker = async (
  allowsMultipleSelection = false,
  allowsEditing = true
) => {
  // Request media library permissions
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permissionResult.granted) {
    alert("Permission to access media library is required!");
    return null;
  }

  // Launch image library after permission granted
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"], // Allows both images and videos
    allowsMultipleSelection: allowsMultipleSelection, // Enable multiple selection
    allowsEditing: allowsEditing, // Allow editing (cropping) for single selection
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    // Return an array of selected assets (photos/videos)
    return result.assets.map((asset) => asset.uri);
  }

  return null; // Return null if the user cancels the selection
};
