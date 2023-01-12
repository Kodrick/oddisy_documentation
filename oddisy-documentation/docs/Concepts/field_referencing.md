---
sidebar_position: 5
title: Field Referencing
---

## What is Field Referencing

Field referencing lets you directly reference information in a field somewhere else. This allows you to keep track of information in different places, and even across Entries, without any trouble. 

For example, you've created and detailed out a cursed hammer. Any wielder struggles with an unstoppable desire to create. Instead of seeing this information only as part of the description of this item, or by trying to remember that your character and this item are linked, you can instead directly reference the effects of the curse on your character. This even updates when you change the information in the curse!

The ability to share information between entries in this manner is available for all entries.

## How to use Field Referencing

### Local References

Field referencing is quite simple. When you want to reference a field that is in the same Entry as the field you are editing, simple use `/nameOfField`. If the field name has spaces inside, use `/"name of field"`. 

### Absolute References

Absolute references allow you to reference information in other Entries. To access information from other Entries, simply use `/nameOfEntry/fieldName` or `/"name of entry"/"name of field"`. Again, if any part of the name uses spaces, remember to use quotations to ensure the reference is properly retrieved.

One problem with using the name of an Entry is that names can be changed, but references to those names can't be automatically updated. A solution for this is to use the Entry Id instead of the name of an Entry to reference that Entry. You can find the Id of an Entry by right clicking the Entry Page, or by right clicking the card of an Entry. This will allow you to select the `Copy Entry Id to Clipboard` option, which you can use instead of the name of an Entry.

For example, `/10/nameOfField` instead of `/nameOfEntry/nameOfField`.

:::note

Field Referencing is case sensitive. This means a Field named CAPS is distinct from a Field name Caps. The same is true for Fields named caps, cAPS, CaPs, or any other variation.

:::

:::note 

Entries and Fields *CAN* have the same name, which means it's possible for field references to become confused between two fields of the same name. 

We recommend always trying to use a unique name for both Fields and Entries. 

:::

:::note

Because we use the '/' character as a way to determine where you want to add a field reference, we have removed the option to use this character in names.

:::

## Where does Field Referencing work?

Field referencing works in any text-based field of an Entry. This includes the description, short text fields, long text fields, and each value in a list.

