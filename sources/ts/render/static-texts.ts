/**
 * @file static-texts.ts
 * @description Static text used by components.
 */

'use strict';

const staticTexts = {
    brandName: 'E-Mart',
    announcementText: 'Get 15% off for purchases totaling $15.77 or more.',
    announcementCloseText: 'Click to hide the announcement',
    brandLogoAlt: 'E-Mart logo',
    backToHomePage404: 'Back to Homepage',
    header: {
        searchIconText: 'Search product',
        userOptionsIcon: {
            topText: 'Login / Register',
            bottomText: 'Settings',
            loginText: 'Login',
            registerText: 'Register',
            logoutText: 'Logout',
            adminDashboard: 'Admin dashboard',
            accountSettings: 'Account settings',
        },
        shoppingCartIconText: 'Shopping Cart',
        productSearchInput: {
            placeholder: 'Search product',
            searchButton: 'Search',
            loadingStateText: 'Loading...',
            emptyStateText: 'There are no products',
        },
        userModalWindow: {
            unknownServerError: 'Unknown server error occurred.',
            registerSuggestionText: "Don't have an account yet ?",
            registerSuggestionTextLink: 'Register now',
            loginSuggestionText: 'Already have an account ?',
            loginSuggestionTextLink: 'Log in now',
            forgotPasswordSuggestionText: 'Forgot password ?',
            forgotPasswordSuggestionTextLink: 'Recover account',
            separatorText: 'Or',
            loginForm: {
                title: 'Login',
                subtitle: 'Log in to access the store management system',
                usernameInputLabel: 'Username',
                usernameInputPlaceholder: 'Enter the username',
                usernameInputFormMessageRequire: 'Please enter the username',
                passwordInputLabel: 'Password',
                passwordInputPlaceholder: 'Enter the password',
                passwordInputFormMessageRequire: 'Please enter the password',
                loginButton: 'Login',
                redirectMessage: 'Login successful, redirecting...',
            },
            registerForm: {
                title: 'Register',
                subtitle: 'Register to access the store management system',
                emailInputLabel: 'Email',
                emailInputPlaceholder: 'Enter the email',
                emailInputFormMessageRequire: 'Please enter the email',
                emailInputFormMessageInvalidEmail:
                    'The email address is invalid (Only Gmail is supported)',
                usernameInputLabel: 'Username',
                usernameInputPlaceholder: 'Enter the username',
                usernameInputFormMessageRequire: 'Please enter the username',
                usernameInputFormMessageInvalidUsernameCharacters:
                    'The username contains invalid characters [a-zA-Z0-9]',
                usernameInputFormMessageInvalidUsernameLength:
                    'The username must be at least 6 characters and a maximum of 16 characters',
                passwordInputLabel: 'Password',
                passwordInputPlaceholder: 'Enter the password',
                passwordInputFormMessageRequire: 'Please enter the password',
                passwordInputFormMessageInvalidPasswordLength:
                    'The password must be at least 8 characters and a maximum of 32 characters',
                passwordInputFormMessageNotMatch: 'Passwords do not match',
                confirmPasswordInputLabel: 'Confirm Password',
                confirmPasswordInputPlaceholder: 'Confirm password',
                tosCheckboxFormMessageRequire:
                    'You must agree to the terms of use to continue',
                argreementText: 'I agree to the',
                argreementTextLink: 'Terms of Service',
                registerButton: 'Register',
                redirectMessage: 'Registration successful, redirecting...',
            },
            forgotPasswordForm: {
                title: 'Recover',
                subtitle: 'Recover account password using email address',
                emailInputLabel: 'Email',
                emailInputPlaceholder: 'Enter the email',
                emailInputFormMessageRequire: 'Please enter the email',
                emailInputFormMessageInvalidEmail:
                    'The email address is invalid (Only Gmail is supported)',
                recoverButton: 'Recover',
            },
        },
    },
    footer: {
        brandLogoAlt: 'E-Mart logo',
        subscribeTitle: 'Subscribe To Our Newsletter',
        subscribeText: 'Get our latest offers and news straight in your inbox',
        subscribeInputPlaceholder: 'Enter your email',
        subscribeButton: 'Subscribe',
        subscribeSuccessfulModal: {
            title: 'Success',
            closeButton: 'Close',
        },
        aboutUsLinkTitle: 'About Us',
        aboutUsLinkText:
            'E-Mart is a simple e-commerce website that resells toys from the POP Mart brand.',
        linksLinkTitle: 'Links',
        menuLinkTitle: 'Categories',
        contactLinkTitle: 'Contact Info',
        footerCopyRightText: 'Copyright 2025 E-Mart. All Rights Reserved.',
    },
    productsView: {
        title: 'Explore our products',
        productImageAlt: 'Product image',
        orderButton: 'Order Now',
        orderButtonOutOfStock: 'Out of stock',
        emptyCategory: 'There are currently no products in this category',
        emptySearch: 'Product not found',
        suggestion1: 'You can click',
        suggestionLink: 'here',
        suggestion2: 'to view all products.',
        loadingText: 'Please wait...',
        emptyTextTitle: 'The store currently has no products',
        emptyTextDesc: 'Please check back later.',
        unavailableTextTitle: 'The system is under maintenance',
        unavailableTextDesc: 'Please check back later.',
        productDetailWindow: {
            productImageAlt: 'Product image',
            noteInputLabel: 'Note',
            noteInputPlaceholder:
                'Enter a note for this product in your order...',
            totalLabel: 'Total amount',
            orderNowButton: 'Order now',
            addToCartButton: 'Add to cart',
        },
    },
    cartWindow: {
        title: 'Shopping Cart',
        emptyCart: 'Your shopping cart is empty.',
        totalLabel: 'Total amount:',
        addMoreButton: 'Browse more',
        orderNow: 'Checkout',
        noteLabel: 'Note',
        closeNoteInputButton: 'Update',
        emptyNote: '(Click to add note)',
        deleteCartItemButton: 'Remove',
    },
    paymentWindow: {
        title: 'Checkout',
        customerNameInputFormMessageRequire:
            "Please enter the recipient's name",
        customerPhoneNumberInputFormMessageRequire:
            'Please enter the phone number',
        customerAddressInputFormMessageRequire:
            'Please enter the shipping address',
        orderInfoCard: {
            title: 'Order information',
            deliveryMethodLabel: 'Delivery method',
            shippingMethod: 'Home delivery',
            pickupMethod: 'Pick up',
            deliveryTimeLabel: 'Delivery time',
            deliveryNow: "Deliver as soon as it's ready",
            deliveryTime: 'Deliver at the specified time',
            pickupAtLabel: 'Pick up location',
            pickupLocation1:
                '485 Maple Drive (later 211 Pine St.), Mayfield, U.S.',
            pickupLocation2: '322 Maple St., Mayberry, N.C',
            orderNoteLabel: 'Order notes',
            orderNotePlaceholder: 'Enter additional notes (for delivery)',
        },
        deliveryInfoCard: {
            title: 'Recipient information',
            customerNameInputPlaceholder: "Recipient's name",
            customerPhoneNumberInputPlaceholder: "Recipient's phone number",
            customerAddressInputPlaceholder: "Recipient's delivery address",
        },
        invoiceCard: {
            title: 'Order Summary',
            subtotalLabel: 'Price of',
            subtotalLabelUnit: 'item(s)',
            shippingFeeLabel: 'Shipping cost',
            shippingFee: '$1.00',
            agreementText1: "By clicking the 'Place Order' button, I agree to",
            agreementTextLink: "E-Mart's operating policy",
            agreementText2: '.',
            totalLabel: 'Total amount:',
            placeOrderButton: 'Place Order',
        },
        cartItemsUpdatedToast: {
            title: 'Notice',
            message: 'Your cart total has been updated due to product updates.',
        },
        placeOrderSuccessWindow: {
            title: 'Order placed successfully',
            message: 'Your order is being processed.',
            closeButton: 'Close',
        },
    },
    toast: {
        errorDefaultTitle: 'Error',
    },
    profileSection: {
        settingItems: {
            accountInfo: 'Account information',
            updatePassword: 'Update password',
            deleteAccount: 'Delete account',
        },
        userInfoCard: {
            title: 'Account information',
            description: 'Update your account information.',
            userAvatarImageAlt: 'User profile picture',
            uploadButton: 'Upload avatar',
            usernameInputLabel: 'Username',
            usernameInputPlaceholder: 'Username',
            emailInputLabel: 'Email address',
            emailInputPlaceholder: 'Email address',
            emailInputRequiredFormMessage: 'Please enter your email address',
            roleInputLabel: 'Role',
            roleInputPlaceholder: 'Role',
            roleMember: 'Member',
            roleAdmin: 'Admin',
            roleUnknown: 'Unknown',
            createdAtInputLabel: 'Created at',
            successEmailUpdateRequest:
                'Check your new email to confirm your new email address.',
            refreshButton: 'Refresh',
            saveButton: 'Save changes',
        },
        updatePasswordCard: {
            title: 'Update password',
            description: 'Update the new password for the account.',
            currentPasswordInputLabel: 'Current password',
            currentPasswordInputPlaceholder: 'Enter current password',
            currentPasswordInputRequiredFormMessage:
                'Please enter your current password',
            newPasswordInputLabel: 'New password',
            newPasswordInputPlaceholder: 'Enter new password',
            newPasswordInputRequiredFormMessage:
                'Please enter your new password',
            newPasswordInputMatchOldPasswordFormMessage:
                'The new password is the same as the old password',
            confirmNewPasswordInputLabel: 'Confirm password',
            confirmNewPasswordInputPlaceholder: 'Confirm new password',
            confirmNewPasswordInputRequiredFormMessage:
                'Please enter your new password',
            confirmNewPasswordInputNotMatchFormMessage:
                'Passwords do not match',
            updateButton: 'Update password',
        },
        deleteAccountCard: {
            title: 'Delete account',
            description:
                'Deleting the account is permanent and is an irreversible action.',
            currentPasswordInputPlaceholder: 'Enter your password to confirm',
            confirmButton: 'Confirm',
            confirmationWindowTitle: 'Confirm',
            confirmationWindowMessage:
                'Are you sure you want to delete your account?',
            confirmationWindowCancelButton: 'Cancel',
            confirmationWindowConfirmButton: 'Confirm',
            deleteSuccessWindowTitle: 'Success',
            deleteSuccessWindowMessage:
                'The account has been successfully deleted.',
            deleteSuccessWindowCloseButton: 'Close',
        },
    },
    resetPasswordSection: {
        title: 'Recover',
        subtitle: 'Update a new password for your account',
        passwordInputLabel: 'Password',
        passwordInputPlaceholder: 'Enter the new password',
        passwordInputFormMessageRequire: 'Please enter the new password',
        passwordInputFormMessageInvalidPasswordLength:
            'The password must be at least 8 characters and a maximum of 32 characters.',
        passwordInputFormMessageNotMatch: 'Passwords do not match',
        confirmPasswordInputLabel: 'Confirm Password',
        confirmPasswordInputPlaceholder: 'Confirm the password',
        recoverButton: 'Update password',
        successfulTitle: 'Success',
        successfulMessage:
            'Your account password has been successfully updated.',
        backToHomepage: 'Back to Homepage',
    },
    updateEmailSection: {
        title: 'Update email address',
        processingMessage: 'Processing the request ...',
        successfulMessage: 'Your email address has been updated successfully.',
        backToHomepage: 'Back to Homepage',
    },
    confirmNewsletterSubscribeSection: {
        title: 'Confirm Subscription',
        processingMessage: 'Processing the request ...',
        backToHomepage: 'Back to Homepage',
    },
    adminSection: {
        products: {
            title: 'Product management',
            categoryAllSelectText: 'All',
            searchProductInputPlaceholder: 'Search product',
            refreshButton: 'Refresh',
            addButton: 'Add product',
            itemUnitText: 'Products',
            quantityText: 'Quantity',
            loadingText: 'Loading data ...',
            emptyText: 'There are no products',
            errorText: 'Unable to connect to the system',
            deleteProductConfirmationWindow: {
                title: 'Confirm',
                message: 'Are you sure you want to delete the product?',
                cancelButton: 'Cancel',
                confirmButton: 'Confirm',
            },
            createProductWindow: {
                title: 'Add product',
                productImageAlt: 'Product image',
                uploadButton: 'Upload image',
                createButton: 'Add product',
                nameInputLabel: 'Product name',
                nameInputPlaceholder: 'Enter the product name',
                nameInputFormMessageRequire: 'Please enter the product name',
                categoryInputLabel: 'Categories',
                priceInputLabel: 'Product price',
                priceInputPlaceholder: 'Enter the product price',
                priceInputFormMessageRequire:
                    'Please enter the product price (VNĐ)',
                quantityInputLabel: 'Quantity',
                quantityInputPlaceholder: 'Enter the product quantity',
                quantityInputFormMessageRequire:
                    'Please enter the product quantity',
                priorityInputLabel: 'Priority',
                priorityInputPlaceholder: 'Enter the priority of the product',
                priorityInputFormMessageRequire:
                    'Please enter the priority of the product',
                descInputLabel: 'Product description',
                descInputPlaceholder: 'Enter the product description',
            },
            updateProductWindow: {
                title: 'Update product',
                productImageAlt: 'Product image',
                uploadButton: 'Upload image',
                updateButton: 'Update product',
                nameInputLabel: 'Product name',
                nameInputPlaceholder: 'Enter the product name',
                nameInputFormMessageRequire: 'Please enter the product name',
                categoryInputLabel: 'Categories',
                priceInputLabel: 'Product price',
                priceInputPlaceholder: 'Enter the product price',
                priceInputFormMessageRequire:
                    'Please enter the product price (VNĐ)',
                quantityInputLabel: 'Quantity',
                quantityInputPlaceholder: 'Enter the product quantity',
                quantityInputFormMessageRequire:
                    'Please enter the product quantity',
                priorityInputLabel: 'Priority',
                priorityInputPlaceholder: 'Enter the priority of the product',
                priorityInputFormMessageRequire:
                    'Please enter the priority of the product',
                descInputLabel: 'Product description',
                descInputPlaceholder: 'Enter the product description',
            },
        },
        categories: {
            title: 'Category management',
            searchCategoryInputPlaceholder: 'Search category',
            refreshButton: 'Refresh',
            addButton: 'Add category',
            itemUnitText: 'Categories',
            productUnitText: 'Products',
            loadingText: 'Loading data ...',
            emptyText: 'There are no categories',
            errorText: 'Unable to connect to the system',
            deleteCategoryConfirmationWindow: {
                title: 'Confirm',
                message: 'Are you sure you want to delete the category?',
                cancelButton: 'Cancel',
                confirmButton: 'Confirm',
            },
            createCategoryWindow: {
                title: 'Add category',
                categoryImageAlt: 'Category image',
                uploadButton: 'Upload image',
                createButton: 'Add category',
                nameInputLabel: 'Category name',
                nameInputPlaceholder: 'Enter the category name',
                nameInputFormMessageRequire: 'Please enter the category name',
                priorityInputLabel: 'Priority',
                priorityInputPlaceholder: 'Enter the priority of the category',
                priorityInputFormMessageRequire:
                    'Please enter the priority of the category',
                descInputLabel: 'Category description',
                descInputPlaceholder: 'Enter the category description',
            },
            updateCategoryWindow: {
                title: 'Update category',
                categoryImageAlt: 'Category image',
                uploadButton: 'Upload image',
                updateButton: 'Update category',
                nameInputLabel: 'Category name',
                nameInputPlaceholder: 'Enter category name',
                nameInputFormMessageRequire: 'Please enter category name',
                priorityInputLabel: 'Priority',
                priorityInputPlaceholder: 'Enter the priority of the category',
                priorityInputFormMessageRequire:
                    'Please enter the priority of the category',
                descInputLabel: 'Category description',
                descInputPlaceholder: 'Enter the category description',
            },
        },
        orders: {
            title: 'Order management',
            orderStatusAllSelectText: 'All',
            processingStatusOption: 'Processing',
            shippingStatusOption: 'Delivering',
            completedStatusOption: 'Completed',
            refundingStatusOption: 'Refunding',
            abortedStatusOption: 'Aborted',
            refundedStatusOption: 'Refunded',
            shippingDeliveryMethod: 'Home delivery',
            pickupDeliveryMethod: 'Pick up',
            searchOrderInputPlaceholder: 'Search order',
            refreshButton: 'Refresh',
            itemUnitText: 'Orders',
            loadingText: 'Loading data ...',
            emptyText: 'There are no orders',
            errorText: 'Unable to connect to the system',
            idColumn: 'ID',
            createdAtColumn: 'Created at',
            customerNameColumn: 'Name',
            customerPhoneColumn: 'Phone number',
            statusColumn: 'Status',
            deliveryMethodColumn: 'Delivery method',
            orderDetailsWindow: {
                title: 'Order details',
                productItemEmptyNote: '(No notes)',
                itemAmount: 'Amount:',
                deliveryMethodTitle: 'Delivery method',
                shippingDeliveryMethod: 'Home delivery',
                pickupDeliveryMethod: 'Pick up',
                createdAtTitle: 'Order created at',
                deliveryTimeTitle: 'Delivery time',
                deliveryNow: 'Now',
                deliveryAddressTitle: 'Delivery address',
                pickupAddressTitle: 'Pickup location',
                customerNameTitle: 'Name',
                customerPhoneTitle: 'Phone number',
                productNoLongerExist: 'This product is no longer exist.',
                deliveryNoteTitle: 'Delivery note',
                emptyDeliveryNote: '(No notes)',
                totalPriceTitle: 'Total amount',
                shippingFeeIncluded: '(Includes $1.00 shipping fee)',
                statusTitle: 'Status',
                processingStatusOption: 'Processing',
                shippingStatusOption: 'Delivering',
                completedStatusOption: 'Completed',
                refundingStatusOption: 'Refunding',
                abortedStatusOption: 'Aborted',
                refundedStatusOption: 'Refunded',
                oldTotalTooltip:
                    'Total order value at the time of order placement',
                newTotalTooltip: 'Total order value at the current time',
                oldProductPriceTooltip:
                    'Product value at the time of order placement',
                newProductPriceTooltip: 'Product value at the current time',
            },
            deleteOrderConfirmationWindow: {
                title: 'Confirm',
                message: 'Are you sure you want to delete this order?',
                cancelButton: 'Cancel',
                confirmButton: 'Confirm',
            },
            restoreProductQuantityConfirmationWindow: {
                title: 'Confirm',
                message: 'Do you want to restock the items?',
                cancelButton: 'Cancel',
                confirmButton: 'Confirm',
            },
        },
        users: {
            title: 'User management',
            searchUserInputPlaceholder: 'Search user',
            refreshButton: 'Refresh',
            addButton: 'Add user',
            itemUnitText: 'Users',
            loadingText: 'Loading data ...',
            emptyText: 'There are no users',
            errorText: 'Unable to connect to the system',
            idColumn: 'ID',
            usernameColumn: 'Username',
            emailColumn: 'Email',
            roleColumn: 'Role',
            roleMember: 'Member',
            roleAdmin: 'Admin',
            roleUnknown: 'Unknown',
            createdAtColumn: 'Created at',
            createUserWindow: {
                title: 'Add user',
                userAvatarImageAlt: 'User avatar image',
                uploadButton: 'Upload image',
                createButton: 'Add user',
                emailInputLabel: 'Email',
                emailInputPlaceholder: 'Enter the user email address',
                emailInputFormMessageRequire:
                    'Please enter the user email address',
                emailInputFormMessageInvalidEmail:
                    'The email address is invalid (Only Gmail is supported).',
                usernameInputLabel: 'Username',
                usernameInputPlaceholder: 'Enter the user username',
                usernameInputFormMessageRequire:
                    'Please enter the user username',
                usernameInputFormMessageInvalidUsernameCharacters:
                    'The username contains invalid characters. [a-zA-Z0-9]',
                usernameInputFormMessageInvalidUsernameLength:
                    'The username must be at least 6 characters and a maximum of 16 characters.',
                passwordInputLabel: 'Password',
                passwordInputPlaceholder: 'Enter the user password',
                passwordInputFormMessageRequire:
                    'Please enter the user password',
                passwordInputFormMessageInvalidPasswordLength:
                    'The password must be at least 8 characters and a maximum of 32 characters.',
                roleInputLabel: 'Role',
                roleInputPlaceholder: 'Enter the user role',
                roleInputFormMessageRequire: 'Please enter the user role',
            },
            updateUserWindow: {
                title: 'Update user',
                userAvatarImageAlt: 'User avatar image',
                uploadButton: 'Upload image',
                updateButton: 'Update user',
                emailInputLabel: 'Email',
                emailInputPlaceholder: 'Enter the user email address',
                emailInputFormMessageRequire:
                    'Please enter the user email address',
                emailInputFormMessageInvalidEmail:
                    'The email address is invalid (Only Gmail is supported).',
                usernameInputLabel: 'Username',
                usernameInputPlaceholder: 'Enter the user username',
                usernameInputFormMessageRequire:
                    'Please enter the user username',
                usernameInputFormMessageInvalidUsernameCharacters:
                    'The username contains invalid characters. [a-zA-Z0-9]',
                usernameInputFormMessageInvalidUsernameLength:
                    'The username must be at least 6 characters and a maximum of 16 characters.',
                passwordInputLabel: 'Password',
                passwordInputPlaceholder: 'Enter new password',
                passwordInputFormMessageInvalidPasswordLength:
                    'The password must be at least 8 characters and a maximum of 32 characters.',
                roleInputLabel: 'Role',
                roleInputPlaceholder: 'Enter the user role',
                roleInputFormMessageRequire: 'Please enter the user role',
            },
            deleteUserConfirmationWindow: {
                title: 'Confirm',
                message: 'Are you sure you want to delete this user?',
                cancelButton: 'Cancel',
                confirmButton: 'Confirm',
            },
        },
    },
    hooks: {
        useAPI: {
            productNoLongerExist1: 'The product ',
            productNoLongerExist2: ' is no longer exist.',
            productNoLongerExist3:
                '(The product has been removed from your cart)',
            productPriceChanged1: 'The price of the product ',
            productPriceChanged2: ' has been changed from ',
            productPriceChanged3: ' to ',
            productPriceChanged4: '.',
            productPriceChanged5: '(Your cart has been updated)',
            productOutOfStock1: 'The product ',
            productOutOfStock2: ' is out of stock.',
            productOutOfStock3: '(Your cart has been updated)',
            productQuantityChanged1: 'The store only has ',
            productQuantityChanged2: ' left.',
            productQuantityChanged3: '(Your cart has been updated)',
        },
    },
    components: {
        select: {
            emptyText: 'No options available',
        },
    },
} as const;

export default staticTexts;
