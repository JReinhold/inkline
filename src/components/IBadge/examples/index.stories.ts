import IBadge from '../IBadge.vue';
import {
    IBadgeBasicExample,
    IBadgeColorVariantsExample,
    IBadgeHeadingExample,
    IBadgeSizeVariantsExample
} from './index';
import {
    colorArgType,
    createStory,
    sizeArgType,
    createExampleStory
} from '@inkline/inkline/__storybook__';

export default {
    component: IBadge,
    title: 'Components/Badge',
    argTypes: {
        ...colorArgType(),
        ...sizeArgType()
    }
};

export const Basic = createStory(IBadgeBasicExample);
export const ColorVariants = createExampleStory(IBadgeColorVariantsExample);
export const Heading = createExampleStory(IBadgeHeadingExample);
export const SizeVariants = createExampleStory(IBadgeSizeVariantsExample);
