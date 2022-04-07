---
sidebar_position: 2
---

# Entry Page

The Entry Page shows all the information about an entry.

## Image Widget

The Image Widget holds all the images associated with an entry.

![Image Widget](../../static/img/views_and_screens/entry_page/image_widget.JPG)


### Adding Images

You can add images by clicking on the **+** button in the image widget. This will open up the image picker dialog which allows you to select existing images from the image db and add new from your computer

![Image Picker](../../static/img/views_and_screens/entry_page/image_picker.JPG)

:::info

For more information on how the image db system works visit [Image Database System](./image_database)

:::

### Deleting Images

You can delete images from the entry using the [trash] button. This will delete from the entry itself but will not delete the image from the database.

### Reordering Images

You can reorder the Images by clicking on the [reorder] button. This will open up the Image reorder dialog.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/reorder_images.gif)

Simply drag the images in the order that you want them to appear

### Viewing the Image Larger
Clicking on the Image itself will open up a larger version of the image, and allow you to Change the name of the image and even where the image is found on your computer.

![fullscreen image](../../static/img/views_and_screens/entry_page/fullscreen_image.JPG)

## Name and Description Widget

![Name and Description](../../static/img/views_and_screens/entry_page/name_and_description.JPG)

### Name Widget
The Name Widget Allows you to assign a name to your entry, which can be changed at any time.

To change the name simply click on the name, edit it to be the desired name you want, and click the enter key to save.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_name.gif)

### Description Widget

The Description field Holds a description of the entry.

The description is automatically saved when editing, with the green checkbox appearing on a successful save.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/desc_edit.gif)

:::info

A shorter version of the description will appear on entry cards on the home screen

:::

## Editing Field Widgets

### Short Text
Short Text Field Widgets can be edited by clicking on the widget, editing it to be the desired text you want, and clicking the enter key to save.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_short_text.gif)

### Long Text

Long Text Widgets behave like the description field, automatically saving when edited, with the green checkbox appearing on a successful save.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_long_text.gif)

### Number

Number fields can be edited in the same way as text fields, by clicking on the widget, editing the value, and hitting enter to save.


![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_number.gif)

:::info

Numbers are displayed using a number format allowing you to display things such as “25 lbs” or “$15.00”. For more information on how to use this system visit Number Formats

:::

### Yes/No

The Yes/No field can be edited by clicking on the widget and selecting yes or no.


![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_bool.gif)

### Dropdown

The Dropdown widget can be edited by clicking on the widget and selecting the desired option.


![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_dropdown.gif)

### Color

The Color widget can be edited by clicking on the widget. This will open up a color picker dialog to choose the desired color.


![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_color.gif)

:::tip

If you know the Hex Value of the desired color you can enter it in the **Hex Value** field at the bottom of the dialog.

:::

### List
You can add items to the list widget by using the **+** button at the bottom of the list. 

The items in the list act like [Short Text Field](#short-text) widgets and can be edited the same way.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_list_add.gif)

To delete items from the list right click on the item that you want to delete and click delete.

![Reorder Image Dialog](../../static/img/views_and_screens/entry_page/edit_list_delete.gif)

### Image

:::danger

This feature is not supported yet

:::

## Editing Field Name

To edit a field Name simply click on the Field Name. This will open up a dialog asking you for the new field name.

![fullscreen image](../../static/img/views_and_screens/entry_page/edit_field_name.JPG)

## Custom Fields

Custom fields are edited the same way as regular fields. The only difference is that you can not change the Field name. The field name of a custom field is set by the custom field itself which can be edited in the custom field settings. 

For more information visit [Custom Fields](../Concepts/custom_fields)

:::info 

Custom fields are indicated with a lock symbol next the the fieldname

![fullscreen image](../../static/img/views_and_screens/entry_page/custom_field.JPG)

:::

## Adding Fields to Groups

### Adding a New Field to a Group

Click the **+** button next to the Group and select the field option. 

![fullscreen image](../../static/img/views_and_screens/entry_page/group_name.JPG)

Use the new field dialog to create a field.

![fullscreen image](../../static/img/views_and_screens/entry_page/field_dialog.JPG)

### Adding an existing field to a group

Right click on the field that you want to add to a group, and select the add to group option. 

Select the group from the list and click done.

![fullscreen image](../../static/img/views_and_screens/entry_page/add_field_to_group.GIF)

:::tip

You can edit a fields group in the same way by right clicking and selecting the **Move to Group** option instead

:::

## Adding Linked Entry to a Group

### Adding a new Linked Entry to a Group

Click the **+** button next to the Group and select the entry option. 

![fullscreen image](../../static/img/views_and_screens/entry_page/group_name.JPG)

Use the new entry selection dialog to create new entries or select existing ones.

![fullscreen image](../../static/img/views_and_screens/entry_page/entry_selection_dialog.JPG)


### Adding an existing Linked Entries to a group

Right click on the Linked Entry that you want to add to a group, and select the add to group option. 

Select all the groups from the list that you want this linked entry to be a part of and click done.

![fullscreen image](../../static/img/views_and_screens/entry_page/add_entry_to_group.GIF)

:::tip

You can edit a Linked Entry groups in the same way by selecting the edit groups option instead

:::

## Other Linked Entry Section

Any Linked Entries that are not in a group will appear in the Other Linked Entries Section at the bottom of the page. 

![fullscreen image](../../static/img/views_and_screens/entry_page/other_linked_entries.JPG)

## Editing a Linked Entries Relationship

Each Linked Entry can have a relationship with the entry it is linked to.

This relationship will show up under the name on th linked entry card

![fullscreen image](../../static/img/views_and_screens/entry_page/relationship.JPG)

To edit a relationship right click on the linked entry card and select the **Edit Relationship** option

This will open up the Relationship dialog. 

You can edit both the Linked Entry’s Relationship to the Current entry and the entry’s relationship to the linked entry. 

![fullscreen image](../../static/img/views_and_screens/entry_page/edit_relationship.GIF)

## Alias Bar

The Alias bar shows all aliases for the current entry. For more information on what aliases are and how to use them visit [Aliases](../Concepts/entries#aliases)