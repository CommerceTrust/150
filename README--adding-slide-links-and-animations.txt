#Adding a link to a slide#

1. Go to src > data > data.yaml
1. Navigate to the slide you wish to add a link to.
1. Add a new key `read_more_text` with the desired text of your link.
1. Add a new key `read_more_link` with the desired URL of your link.

##Example:##
    - year: Welcome
      ...
      read_more_text: Visit Commerce Bank
      read_more_link: https://www.commercebank.com

#Adding/editing a transition effect to a slide#

1. Go to src > data > data.yaml
1. Navigate to the slide you wish to add the transition to.
1. If the key `animation` does not exist, add it.
1. Assign the value of the `animation` key to be the desired effect. (options are `fade` and `zoom`)

##Example:##
    - year: Welcome
      ...
      animation: fade
