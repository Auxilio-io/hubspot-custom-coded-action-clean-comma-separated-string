# hubspot-custom-coded-action-clean-comma-separated-string
This custom coded action will:

- remove duplicated words in a comma separated string
- remove extra comma "," not preceded by a word or not followed by a word (", ,")
- replace "_" by spaces
- remove extra spaces
- capitalize first letter of a list item

For instance, processing this: _"Sales, marketing, Operations, , marketing, , Technology, Information technology, information_technology"_

Would output this: _"Sales, Marketing, Operations, Technology, Information Technology"_
 
