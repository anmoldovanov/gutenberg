/**
 * WordPress dependencies
 */
import {
	insertBlock,
	getEditedPostContent,
	createNewPost,
	pressKeyWithModifier,
} from '@wordpress/e2e-test-utils';

describe( 'Buttons', () => {
	beforeEach( async () => {
		await createNewPost();
	} );

	it( 'has focus on button content', async () => {
		await insertBlock( 'Buttons' );
		await page.keyboard.type( 'Content' );

		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

	// Todo: Fix this intermittent test.
	// eslint-disable-next-line jest/no-disabled-tests
	it.skip( 'can jump to the link editor using the keyboard shortcut', async () => {
		await insertBlock( 'Buttons' );
		await page.keyboard.type( 'WordPress' );
		await pressKeyWithModifier( 'primary', 'k' );
		await page.keyboard.type( 'https://www.wordpress.org/' );
		await page.keyboard.press( 'Enter' );

		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );
} );
